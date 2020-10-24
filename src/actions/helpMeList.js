import axios from "axios";

const URI='https://apigcp.nimbella.io/api/v1/web/priyabih-g7jfc1ljnlv/default'

export const getHelpList = () => async (dispatch) => {
    const res = await axios.get(`${URI}/getHelpMeList.json`);
    dispatch({
        type: 'HELP_ME_LIST',
        payload: res.data
    })
}

