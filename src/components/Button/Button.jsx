import { ButtonLoad } from "./Button.styled";

const Button = ({onLoadMore}) => {
    return <ButtonLoad type="button" onClick={onLoadMore}>Load more</ButtonLoad>
}

export default Button;