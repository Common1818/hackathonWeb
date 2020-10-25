import axios from "axios";

const URI='https://apigcp.nimbella.io/api/v1/web/priyabih-g7jfc1ljnlv/default'

export const getHelpList = () => async (dispatch) => {
    try {
        const res = await axios.get(`${URI}/getHelpMeList.json`);
        console.log(res);
        dispatch({
            type: 'HELP_ME_LIST',
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }

}

export const addHelpList = (params) => async (dispatch) => {  
 
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
    };
    const body = JSON.stringify(params);
    console.log(body)
    try {
        const res = await axios.post(` ${URI}/addHelpMeList.json`, body, config);
        console.log(res)
        dispatch({
            type: 'ADDED_TO_HELP_ME_LIST',
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
    
}