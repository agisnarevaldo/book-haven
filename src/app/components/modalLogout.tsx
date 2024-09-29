import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import React from "react";

export default function ModalLogout() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    }

    return (
        <>
            <Button onPress={onOpen}>
                <Icon className="text-2xl mr-2" icon="streamline:interface-logout-arrow-exit-frame-leave-logout-rectangle-right" />
                Keluar
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop={"blur"}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            {/*<ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>*/}
                            <ModalBody className="pt-8">
                                <p>
                                    Apakah anda yakin ingin keluar dari aplikasi?
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Batalkan
                                </Button>
                                <Button color="primary" onPress={logout}>
                                    Lanjutkan
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}