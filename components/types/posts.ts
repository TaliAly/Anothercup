export interface postProps {
    id: string,
    title: string,
    img: string,
    author: string,
    content?: string,
    createdAt: Date,
    type: 'horizontal' | 'vertical' | 'normal' | undefined
}