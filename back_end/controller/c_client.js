const {Client} = require("../model/m_client");


const getClient = async(req, res) => {
    let users = await Client.findAll({
        attributes:{exclude:['updatedAt']}
    });

    res.send(users);
}

const createClient = async (req, res) => {

    await Client.create(req.body).then( async() => {

        res.send('Client created successfully').status(200)
        }).catch( async (err) => {

            res.send(err).status(500);
        })
    
   
};

const updateClient = async(req, res) => {

    await Client.update(req.body, {where:{id:req.query.id}} ).then( async() => {

        res.send('Client updated successfully').status(200)
        }).catch( async (err) => {

            res.send(err).status(500);
        });


}

const deleteClient = async(req, res) => {
    
    await Client.destroy({where: {id: req.query.id}}).then( async(client) => {
        if(client){
            res.send('Client deleted successfully').status(200)
        }else {
            res.send('Client not found').status(400)
        }
        
        }).catch( async (err) => {

            res.send(err).status(500);
        });

    
}

module.exports = { getClient, createClient, updateClient, deleteClient};