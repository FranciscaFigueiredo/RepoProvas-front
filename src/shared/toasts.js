import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';

function toastError(message) {
    return toast.error(message, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        closeButton: false,
        progress: undefined,
        className: 'toastStyle',
    });
}

function toastSuccess(message) {
    return toast.success(message, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        closeButton: false,
        draggable: true,
        progress: undefined,
        className: 'toastStyle',
    });
}

const StyledContainer = styled(ToastContainer)`
    // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
    &&&.Toastify__toast-container {
    }
    .Toastify__toast {
    }
    .Toastify__toast-body {
    }
    .Toastify__progress-bar {
    }
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    position: absolute;
    top: 20px;
    left: 0;

    z-index: 10;
`;

export { toastError, toastSuccess, StyledContainer };
