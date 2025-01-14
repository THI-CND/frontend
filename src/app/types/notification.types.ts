export interface NotificationResponse {
    id: number;
    username: string;
    title: string;
    message: string;
    status: 'READ' | 'UNREAD' | 'DELETED';
}