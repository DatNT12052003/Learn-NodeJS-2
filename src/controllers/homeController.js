

let getHomePage = (req, res) => {
    return res.render('homePage.ejs', {

    });
}

let getAboutPage = (req, res) => {
    return res.render('tests/aboutPage.ejs', {

    });
}

let getDatPage = (req, res) => {
    return res.send('Hello Nguyen Thanh Dat!');
}

// module.exports = {
//     getHomePage: getHomePage,
//     getDatPage: getDatPage
// }

export default {
    getHomePage,
    getDatPage,
    getAboutPage
};