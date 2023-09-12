// file : AyesOnAi\express-AyesOnAi\controllers\api\users.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

module.exports = {
  create,
  login,
  deleteUser,
  getUserById,
  updateUserById,
  getAllUsers,
};



async function create(req, res) {
  console.log('create...')
  console.log(req.body)
  try {
    // Add the user to the db
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // Yes, we can serialize a string
    console.log('returning token')
    console.log(token)
    res.status(200).json(token);
  } catch (err) {
    // Probably a dup email
    console.log('error')
    console.log(err)
    res.status(400).json(err);
  }
}



//login is here 

async function login(req, res) {
  try {
    // Find the user by their email address
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    // Check if the password matches
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}
//login is end here 


//deleteuser is here 
async function deleteUser(req, res) {
  try {
    // Find the user by their ID and remove them
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
//deleteuser is end here 

// read user is here 

async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
// read user is end here 

// update user  is her 

 async function updateUserById(req, res) {
  console.log('req.params.id ', req.params.id)
  console.log('req.body ', req.body)
  try {
    // Find the user by their ID and update their data
      const updatedUser = await User.findByIdAndUpdate( req.params.id, req.body, { new: true })
      console.log("updateUserById function")
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    console.log("updatedUser", updatedUser)
    return res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
}
// update user  is end her 


/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

// get all users from the DB

async function getAllUsers(req, res) {
  console.log(
    "test"
  )
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {

    console.log(err)
    res.status(500).json({ error: 'Internal server error' });
  }
}