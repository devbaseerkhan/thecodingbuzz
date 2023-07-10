import { Button } from "react-bootstrap";


export default function AppButton({ left, title, right, className, onClick, ...props }) {
    return (
        <Button className={className} onClick={onClick} {...props} >
            {left}
            {title}
            {right}
        </Button>
    )
}