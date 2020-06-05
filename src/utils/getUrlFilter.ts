import { BASE_URL, BASE_DEV_URL } from '../consts';

export function getUrlFilter(): string | undefined {
    const windowLocation = window.location.href;
    if (windowLocation === BASE_URL || windowLocation === BASE_DEV_URL) {
        return undefined;
    }
    const splitLocation = windowLocation.split('/');
    return splitLocation.length > 0
        ? splitLocation[splitLocation.length - 1].replace('%20', ' ')
        : undefined;
}
