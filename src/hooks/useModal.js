import { useState, useCallback } from "react";
import { PROJECTS, COLLECTIONS } from "../data/content";

export function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState(null);
    const [type, setType] = useState("project");

    const openProject = useCallback((projectId) => {
        setContent(PROJECTS[projectId]);
        setType("project");
        setIsOpen(true);
    }, []);

    const openCollection = useCallback((collectionId) => {
        setContent(COLLECTIONS[collectionId]);
        setType("collection");
        setIsOpen(true);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
        setContent(null);
    }, []);

    return {
        isOpen,
        content,
        type,
        openProject,
        openCollection,
        close,
    };
}
