
const db = require('./db')

const addUser = (email, uname, password) => {
    return db.User.findOne({ email }).then(user => {
        if (user) {
            return {
                status: false,
                message: "user already present",
                statusCode: 400
            }
        } else {
            newUser = new db.User({
                email,
                uname,
                password
            })
            newUser.save()
            return {
                status: true,
                statusCode: 200,
                message: "user registered"
            }
        }
    })
}

const login = (email, password) => {
    return db.User.findOne({ email, password }).then(log => {

        if (log) {
            uname = log.uname
            return {
                status: true,
                statusCode: 200,
                message: "login sucess",
                uname
            }
        } else {
            return {
                status: false,
                statusCode: 400,
                message: "login failed"
            }
        }

    })
}

const info = (uname, proName, info, date, pid) => {
    return db.User.findOne({ uname }).then(data => {
        if (data) {

            let id = date.replace(/\D/g, "");

            NewCollection = new db.Collection({
                uname,
                proName,
                info,
                date,
                id
            })
            NewCollection.save()
            return {
                status: true,
                statusCode: 200,
                message: "post updated",
            }
        } else {
            return {
                status: false,
                statusCode: 400,
                message: "posting Failed",
            }
        }
    })
}

const allTweets = () => {
    return db.Collection.find().then(tweets => {
        if (tweets) {
            return {
                status: true,
                statusCode: 200,
                tweets
            }
        } else {
            return {
                status: false,
                statusCode: 400,
                message: "faild to load tweets"
            }

        }

    })
}

const userTweets = (uname) => {
    return db.Collection.find({ uname }).then(tweets => {
        if (tweets) {
            return {
                status: true,
                statusCode: 200,
                message: tweets
            }
        } else {
            return {
                status: false,
                statusCode: 400,
                message: `faild to fetch tweets`
            }
        }
    })
}

const deletePost = (pid) => {
    return db.Collection.delete({ pid }).then(feed => {
        if (feed) {
            return {
                status: true,
                statusCode: 200,
                message: "tweet removed"
            }
        }
    })

}


module.exports = {
    addUser, login, info, allTweets, userTweets, deletePost
}