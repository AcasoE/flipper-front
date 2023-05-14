import moment from "moment/moment"

export const  getTimeAgo = (fecha)=>{
    const timeAgo = moment(fecha).fromNow()
    return timeAgo
}

