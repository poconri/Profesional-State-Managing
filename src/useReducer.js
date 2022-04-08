const intialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
};

const reducerif = (state, action) => {
    if (action.type === 'ERROR') {
        return {
            ...state,
            error: true,
            loading: false,
        };
    } else if (action.type === 'CHECK') {
        return {
            ...state,
            loading: true,
        };
    } else if (action.type === 'WRITE') {
        return {
            ...state,
            value: action.value,
            error: false,
            loading: false,
        };
    } else if (action.type === 'DELETE') {
        return {
            ...state,
            deleted: true,
            value: '',
            error: false,
            loading: false,
        };
    } else if (action.type === 'CONFIRM') {
        return {
            ...state,
            confirmed: true,
            value: '',
            error: false,
            loading: false,
        };
    } else if (action.type === 'RESET') {
        return {
            ...state,
            deleted: false,
            confirmed: false,
            value: '',
            error: false,
            loading: false,
        };
    } else {
        return {
            ...intialState,
        };
    }
};

const reducerSwitch = (state, action) => {
    switch (action.type) {
        case 'ERROR':
            return {
                ...state,
                error: true,
                loading: false,
            };
        case 'CHECK':
            return {
                ...state,
                loading: true,
            };
        case 'WRITE':
            return {
                ...state,
                value: action.value,
                error: false,
                loading: false,
            };
        case 'DELETE':
            return {
                ...state,
                deleted: true,
                value: '',
                error: false,
                loading: false,
            };
        case 'CONFIRM':
            return {
                ...state,
                confirmed: true,
                value: '',
                error: false,
                loading: false,
            };
        case 'RESET':
            return {
                ...state,
                deleted: false,
                confirmed: false,
                value: '',
                error: false,
                loading: false,
            };
        default:
            return {
                ...intialState,
            };
    }
}

const reducerObject = (state, action) => ({
    'ERROR': {
        ...state,
        error: true,
        loading: false,
    },
    'CHECK': {
        ...state,
        loading: true,
    },
    'WRITE': {
        ...state,
        value: action.value,
        error: false,
        loading: false,
    },
    'DELETE': {
        ...state,
        deleted: true,
        value: '',
        error: false,
        loading: false,
    },
    'CONFIRM': {
        ...state,
        confirmed: true,
        value: '',
        error: false,
        loading: false,
    },
    'RESET': {
        ...state,
        deleted: false,
        confirmed: false,
        value: '',
        error: false,
        loading: false,
    },
    default: {
        ...intialState,
    },
});