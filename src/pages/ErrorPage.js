import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <Box>
        <Typography><strong>Oooopppsss!!!</strong></Typography>
            <Typography>Sorry an unexpected error occured.</Typography>
            {/* <Typography>{error.}</Typography> */}
        </Box>
    )
}
export default ErrorPage;