import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse)=>{
    const users = [
        {id:1, nome: 'Rodrigo'},
        {id:2, nome: 'Amanda'},
        {id:3, nome: 'Antonio'},
        {id:4, nome: 'Rita'},

    ]

    return response.json(users)
}