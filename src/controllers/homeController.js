import db from '../models/index'
import CRUDService from '../services/CRUDService'

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homePage.ejs', {
            data: data
        });
    } catch (e) {
        console.log(e)
    }
}

let getAboutPage = (req, res) => {
    return res.render('tests/aboutPage.ejs', {

    });
}

let getDatPage = (req, res) => {
    return res.send('Hello Nguyen Thanh Dat!');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let massage = await CRUDService.createNewUser(req.body);
    console.log(massage);
    return res.send('OKE DESU')
}

let displayCRUD = async (req, res) => {
    let data = await CRUDService.getAllUsers();
    console.log("----------------");
    console.log(data);
    console.log("----------------");
    return res.render('display-CRUD.ejs', {
        data: data
    });
}

let editCRUD = async (req, res) => {
    let userId = req.query.id;
   // console.log(userId);
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        return res.render('edit-CRUD.ejs', {
            userData: userData,
        });
    } else {
        return res.send("ERROR")
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    console.log(data);
    await CRUDService.updateUserData(data);
    return res.redirect('/get-crud');
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    await CRUDService.deleteUserById(id);
    return res.redirect('/get-crud');
}

// module.exports = {
//     getHomePage: getHomePage,
//     getDatPage: getDatPage
// }

export default {
    getHomePage,
    getDatPage,
    getAboutPage,
    getCRUD,
    postCRUD,
    displayCRUD,
    editCRUD,
    putCRUD,
    deleteCRUD,
};