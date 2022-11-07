import Avatars from './images/avatars';
import VersusAvatars from './images/versus';
import PreviewAvatars from './gifs';

class Champion {
    constructor(
        avatar,
        versusAvatar,
        previewAvatar,
    ) {
        this.avatar = avatar;
        this.versusAvatar = versusAvatar;
        this.previewAvatar = previewAvatar;
    }
}

const championsList = [
    'Shang_Tsung', 'Sindel', 'Jax', 'Kano', 'Liu_Kang', 'Sonya', 'Stryker', 'Robo_Smoke', 'SubZero_Unmasked', 'Cyrax', 'Sektor', 'Nightwolf', 'Sheeva', 'Kung_Lao', 'Kabal'
];

const Champions = championsList.map((champion) => new Champion(Avatars[champion], VersusAvatars[champion], PreviewAvatars[champion]));

export default Champions;
