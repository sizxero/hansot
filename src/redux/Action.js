// Action type
export const SIGNUP = 'SIGNUP';
export const WRITE_ID = 'WRITE_ID';
export const WRITE_PW = 'WRITE_PW';
export const WRITE_PW_RE = 'WRITE_PW_RE';
export const WRITE_NAME = 'WRITE_NAME';
export const WRITE_EMAIL = 'WRITE_EMAIL';
export const WRITE_PHONE = 'WRITE_PHONE';
export const SAME_PW_CHECK = 'SAME_PW_CHECK';

// Action creators
export const clickSignup = () => {
    return {
        type: SIGNUP,
    }
}

export const writeId = (id) => {
    return {
        type: WRITE_ID,
        id: id,
    }
}

export const writePw= (pw) => {
    return {
        type: WRITE_PW,
        pw: pw,
    }
}

export const writePwRe= (pwre) => {
    return {
        type: WRITE_PW_RE,
        pwre: pwre,
    }
}

export const writeName = (name) => {
    return {
        type: WRITE_NAME,
        name: name,
    }
}

export const writeEmail = (email) => {
    return {
        type: WRITE_EMAIL,
        email: email,
    }
}

export const writePhone = (phone) => {
    return {
        type: WRITE_PHONE,
        phone: phone,
    }
}

export const samePwCheck = () => {
    return {
        type: SAME_PW_CHECK,
    }
}
