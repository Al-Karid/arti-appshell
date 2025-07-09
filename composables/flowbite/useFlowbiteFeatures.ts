// composables/useModals.ts
import { initDrawers, initModals } from "flowbite";

export const useFlowbiteModals = () => {
    onMounted(() => {
        useFlowbite(() => {
            initModals();
        });
    })
}

export const useFlowbiteDrawers = () => {
    onMounted(() => {
        useFlowbite(() => {
            initDrawers();
        });
    })
}