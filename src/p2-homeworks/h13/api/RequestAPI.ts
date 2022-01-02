import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
})

export const RequestAPI = {
    setCheckBox(success: boolean) {
        return instance.post<{ success: boolean }, AxiosResponse<AnswerType>>('', {success});
    },
}

export type AnswerType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: {}
}