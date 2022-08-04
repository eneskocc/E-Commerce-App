import { takeLatest, takeEvery, call, put, select, delay } from 'redux-saga/effects';
import * as $ from './actions';
import { apiUrl,} from '../config/'
import axios from 'axios';



function* handler() {
    yield takeLatest($.GET_USER, FUNC_GET_USER);
 

}

function* FUNC_GET_USER(action){
    try {
        yield put ({
            type:$.GET_USER_REQUEST
        })
        const response = yield axios.post(apiUrl+'/auth/login',action.payload)
        console.log("gelen respone data :"+JSON.stringify(response.data))
        if(response.data.status==0){
            yield put({
                type:$.GET_USER_REQUEST_FAILURE,
                ERROR:response.data.errorMessage
            })
        }
        else{
            yield storage.set("USER_TOKEN", response.data.accessToken)
            yield setToken();
            yield put({
                type:$.GET_USER_REQUEST_SUCCESS,
                USER:response.data.rows[0]
            })
        }
    } catch (error) {
        yield put({
            type:$.GET_USER_REQUEST_FAILURE,
            ERROR:error
        })
    }
    finally{
        yield put({
            type:$.GET_USER_REQUEST_END
        })
    }
}




export { handler };