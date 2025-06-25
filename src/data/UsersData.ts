export type UserType = {
  username: string
  password?: string
  refCode: string
  Balance: number
}


export const users: UserType[] = [
  {
    username: "aidyn@mail.ru", 
    password: "123456", 
    refCode: "saef125", 
    Balance: 12.00,
  },
  { 
    username: "admin@mail.ru", 
    password: "adminpass", 
    refCode: "efwf789", 
    Balance: 1.00 
  },
  { 
    username: "user@mail.ru", 
    password: "qwerty", 
    refCode: "acax845", 
    Balance: 100.00
  }
]