// composables/useModals.ts
import { initModals } from "flowbite";

export const useFlowbiteModals = () => {
    onMounted(() => {
        useFlowbite(() => {
            initModals();
        });
    })
}