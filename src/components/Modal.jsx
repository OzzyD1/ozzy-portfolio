import { useEffect, useCallback } from "react";

function Modal({ content, isOpen, onClose, type = "project" }) {
    const handleEscape = useCallback(
        (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        },
        [onClose]
    );

    const handleBackdropClick = useCallback(
        (e) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", handleEscape);
        } else {
            document.body.style.overflow = "unset";
            document.removeEventListener("keydown", handleEscape);
        }

        return () => {
            document.body.style.overflow = "unset";
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, handleEscape]);

    if (!isOpen || !content) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className="fixed inset-0 bg-opacity-50"
                style={{ backgroundColor: "rgba(42, 42, 42, 0.5)" }}
                onClick={handleBackdropClick}
                aria-hidden="true"
            />

            <div
                className="relative w-full h-full max-w-6xl max-h-[90vh] overflow-hidden"
                style={{
                    backgroundColor: "#f5f2eb",
                    border: "4px solid #2a2a2a",
                }}
            >
                <div
                    className="absolute -bottom-2 -right-2 w-full h-full -z-10"
                    style={{ backgroundColor: "#2a2a2a" }}
                />

                <ModalHeader content={content} onClose={onClose} />
                <ModalContent content={content} type={type} />
            </div>
        </div>
    );
}

function ModalHeader({ content, onClose }) {
    return (
        <div
            className="flex justify-between items-center p-6"
            style={{
                borderBottom: "4px solid #2a2a2a",
                backgroundColor: "#f5f2eb",
                color: "#2a2a2a",
            }}
        >
            <div>
                <h1
                    id="modal-title"
                    className="text-3xl md:text-4xl font-bold tracking-wider"
                >
                    {content.title}
                </h1>
                <p className="text-sm tracking-widest uppercase text-gray-600 mt-1">
                    {content.description}
                </p>
            </div>
            <button
                onClick={onClose}
                className="text-4xl font-bold hover:bg-gray-100 px-4 py-2 transition-colors rounded focus:outline-none focus:ring-2"
                style={{ color: "#2a2a2a" }}
                aria-label="Close modal"
            >
                ×
            </button>
        </div>
    );
}

function ModalContent({ content, type }) {
    return (
        <div
            className="h-full overflow-y-auto pb-20"
            style={{ backgroundColor: "#f5f2eb", color: "#2a2a2a" }}
        >
            <div className="p-6 space-y-8">
                {content.overview && (
                    <ContentSection
                        title="OVERVIEW"
                        htmlContent={content.overview}
                    />
                )}

                {type === "project" && <ProjectInfo content={content} />}

                {content.gallery && (
                    <ContentSection
                        title="GALLERY"
                        htmlContent={content.gallery}
                    />
                )}

                {content.details && (
                    <ContentSection
                        title="DETAILS"
                        htmlContent={content.details}
                    />
                )}

                {type === "project" &&
                    content.links &&
                    Object.keys(content.links).length > 0 && (
                        <LinksSection links={content.links} />
                    )}
            </div>
        </div>
    );
}

function ContentSection({ title, htmlContent }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 tracking-wider">
                {">"} {title}
            </h2>
            <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
        </div>
    );
}

function ProjectInfo({ content }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <InfoItem label="YEAR" value={content.year} />
            <InfoItem label="ROLE" value={content.role} />
            <div className="md:col-span-2">
                <InfoItem
                    label="TECH"
                    value={content.technologies?.join(", ") || "N/A"}
                />
            </div>
        </div>
    );
}

function InfoItem({ label, value }) {
    return (
        <div>
            <h3 className="font-bold text-sm tracking-wider mb-2">
                {label}://
            </h3>
            <p className="text-base">{value}</p>
        </div>
    );
}

function LinksSection({ links }) {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 tracking-wider">
                {">"} LINKS
            </h2>
            <div className="flex flex-wrap gap-4">
                {Object.entries(links).map(([linkType, url]) => (
                    <LinkButton key={linkType} type={linkType} url={url} />
                ))}
            </div>
        </div>
    );
}

function LinkButton({ type, url }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
                px-4 py-2 font-bold uppercase
                cursor-pointer transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-offset-2
                relative inline-block
            "
            style={{
                border: "4px solid #2a2a2a",
                backgroundColor: "#f5f2eb",
                color: "#2a2a2a",
                boxShadow: "0 0 0 0 rgba(42, 42, 42, 1)",
            }}
            onMouseEnter={(e) => {
                e.target.style.boxShadow =
                    "4px 4px 0px 0px rgba(42, 42, 42, 1)";
            }}
            onMouseLeave={(e) => {
                e.target.style.boxShadow = "0 0 0 0 rgba(42, 42, 42, 1)";
            }}
        >
            <div
                className="absolute -bottom-1 -right-1 w-full h-full -z-10"
                style={{ backgroundColor: "#2a2a2a" }}
            />
            {type}
        </a>
    );
}

export default Modal;
