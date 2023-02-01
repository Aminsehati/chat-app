export class User {
    first_name!: string
    last_name!: string
    avatar!: string
}
export class Message {
    user!: User
    is_me!: boolean
    text!: string
    date_time!: string
}
export class Chat {
    user!: User
    messages!: Message[]
    id!: number | string
    date_time!: string
}
