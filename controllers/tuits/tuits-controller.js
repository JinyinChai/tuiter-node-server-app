import posts from "./tuits.js";

let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.heart = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;
    newTuit.username = "NASA";
    newTuit.handle = "@nasa";
    newTuit.comments = 0;
    newTuit.tweets = 0;
    newTuit.avatarIcon = "images/elon_musk_avatar.jpeg";
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits = (req, res) =>
    res.json(tuits);

// const updateTuit = (req, res) => {
//     const tuitdIdToUpdate = req.params.tid;
//     const updates = req.body;
//     const tuitIndex = tuits.findIndex(
//         (t) => t._id.toString() === tuitdIdToUpdate)
//     tuits[tuitIndex] =
//         {...tuits[tuitIndex], ...updates};
//        //
//
//     res.sendStatus(200);
// }

const updateTuit = (req, res) => {

    const tuitdIdToUpdate = req.params.tid;

    const updatedTuit = req.body;

    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);

}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) =>
        t._id.toString() !== tuitdIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}


