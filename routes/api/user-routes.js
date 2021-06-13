const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  addFriend,
  createUser,
  updateUser,
  deleteUser,
  removeFriend,
} = require("../../controllers/user-controller");

// get all and post @ /api/users
router.route("/").get(getAllUsers).post(createUser);

// get by id, add, and delete @ /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

//delete and add friend
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;
