const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 28,
    isActive: true
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 34,
    isActive: false
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    age: 45,
    isActive: true
  },
  {
    id: 4,
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    age: 22,
    isActive: true
  },
  {
    id: 5,
    name: "Chris Davis",
    email: "chris.davis@example.com",
    age: 31,
    isActive: false
  }
];

export class UserService {
  getUsers = () => {
    return data
  }

  getUserById (userId) {
    console.log(userId);
    const user = data.find(({ id }) => id === Number(userId))
    return user
  }

  createUser (newData) {
    data.push(newData)
    return newData
  }
}