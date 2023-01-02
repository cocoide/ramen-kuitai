import { atom } from 'recoil';

export const isLoginModalOpen = atom({
    key: "isLoginModalOpen",
    default: false
});

export  const isReviewModalOpen = atom({
    key: "isReviewMoalOpenKey",
    default: false
})