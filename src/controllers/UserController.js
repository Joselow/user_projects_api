export class UserController {
    constructor (userService) {
      this.userService = userService
    }

    getUsers = (req, res) => {
      const users = this.userService.getUsers()
      res.status(200).json(users)
    }
    getUserById = (req, res) => {
      const { id } = req.params
      const user = this.userService.getUserById(id)
      res.status(200).json(user)
    }
    createUser = (req, res) => {
      const{ id, name, email, age, isActive } = req.body
      console.log({ id, name, email, age, isActive });
      const user = this.userService.createUser({ id, name, email, age, isActive })
      res.status(200).json({ created: user })
    }
}