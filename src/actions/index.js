export const selectedTime = (time) =>
{
    return {
        type: 'SELECTED_TIME',
        payload: time
    }
}

export const selectedSound = (sound) =>
{
    return {
        type: 'SELECTED_SOUND',
        payload: sound
    }
}

