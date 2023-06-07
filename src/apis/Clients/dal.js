/**
 * A data Access Layer to interact with DB for Clients APIs
 */
//Connection Pool
import pool from '../../../loaders/pgDB'

class ClientDAL{
    //Sign up api for clients 
    static async signup(data){
        //Insert Client Data 
        const {rows} = await pool.query({
            name:"userSignUp",
            text:`insert into users (full_name , email , password , gender , role , status , tenant_name) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
            values:[
                data.full_name,
                data.password,
                daga.gender,
                data.role,
                data.status,
                data.tenant_name
            ]
        })
        //Returning inserted row data 
        return rows[0]
    }
    //Delete User by id 
    static async deleteUser(id){
        const {rows} =await pool.query({
            name:"deleteUserById",
            text:`delete from users where  id = $1 RETURNING *`,
            values:[id]
        })
    }
    //Get All user 
    static async findAll(){
        const {rows} = await pool.query({
            name:"findAllUsers",
            text:"select * from users"
        })
        return rows
    } 

    //Update USer 
    static async updateUser(id , data ) {
        const {rows } = await pool.query({
            name:"updateUser",
        text:"update users SET full_name = coalesc($1 , full_name) , email = $2 , password = $3 , gender = $4 , role= $5 , status = $6, tenant_name = $7 where id =$8 RETURNING * ",
            values:[
                data.full_name,
                data.email,
                data.password , 
                data.gender, 
                data.role ,
                data.role , 
                data.status , 
                data.tenant_name,
                id,
      
            ]
    })
    return rows[0]

    }
    //Find User by id 
    static async findById(id){
        try {
            const { rows } = await pool.query({
                name:"findUserById",
                text:"select * from users where id = $1 ",
                values :[id],
            })
            return rows[0]
        } catch (error) {
            throw error
        }
    }
    //Find User by email 
    static async findByEmail(email){
        try {
            const {rows } = await  pool.query({
                name:"findByEmail" , 
                text:"select * from users where email = $1",
                values :[email]
            })
            return rows[0]
        } catch (error) {
            throw error
        }
    }
}

module.exports = ClientDAL