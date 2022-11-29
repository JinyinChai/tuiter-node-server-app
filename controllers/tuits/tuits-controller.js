// import posts from "./tuits.js";
import * as tuitsDao from '../tuits/tuits-dao.js'

// let tuits = posts;

const createTuit = async (req, res) => {
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;
    newTuit.username = "NASA";
    newTuit.handle = "@nasa";
    newTuit.comments = 0;
    newTuit.tweets = 0;
    newTuit.avatarIcon = "images/elon_musk_avatar.jpeg";
    // tuits.push(newTuit);
    const insertedTuit = await tuitsDao
        .createTuit(newTuit);
    res.json(insertedTuit);
}

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
}


const updateTuit = async (req, res) => {

    const tuitdIdToUpdate = req.params.tid;

    const updatedTuit = req.body;

    // tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,
            updatedTuit);

    res.json(status);

}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao
        .deleteTuit(tuitdIdToDelete);
    // tuits = tuits.filter((t) =>
    //     t._id.toString() !== tuitdIdToDelete);
    res.json(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}


