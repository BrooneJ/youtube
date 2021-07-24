import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join"});
export const postJoin = async (req, res) => {
    const { name, username, email, password, password2, location }= req.body;
    const pageTitle = "Join";
    if(password !== password2){
        return res.status(404).render("join", {
            pageTitle,
            errorMessage: "Password confirmation does not match."
        })
    }
    const exists = await User.exists({ $or: [{ username }, { email }] });
    if(exists){
        return res.status(404).render("join", {
            pageTitle,
            errorMessage: "This username/email is already taken",
        });
    }
    try{
        await User.create({
            name,
            username,
            email,
            password, 
            password2,
            location,
        })
        return res.redirect("/login");
    } catch(error) {
        return res.status(404).render("join", {
            pageTitle: "Upload Video",
            errorMessage: error._message,
        });
    }
};

export const getLogin = (req, res) => res.render("login", { pageTitle: "Log in"});

export const postLogin = async (req, res) => {
    const {username, email} = req.body;
    const exists = await User.exists({username});
    if(!exists){
        return res
            .status(404)
            .render("login", {
                pageTitle: "Login",
                errorMessage: "An account with this username does not exists."
            });
    }
    res.end();
}

export const edit = (req, res) => res.send("edit");
export const remove = (req, res) => res.send("remove");
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("See user");