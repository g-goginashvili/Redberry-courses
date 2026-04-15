import { Box, Stack, Typography } from "@mui/material";
import FileUploadIcon from "../../assets/icons/file-upload-icon";
import { useField } from "formik";
import { useState } from "react";

export const CustomFileUploader = () => {
    const [, , helpers] = useField<File | null>("avatar");
    const [preview, setPreview] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null;
        helpers.setValue(file);
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <Stack spacing={1} width="100%">
            <Typography fontSize="14px" fontWeight={500} textAlign="left">
                Upload Avatar
            </Typography>
            <Box
                component="label"
                sx={{
                    width: "100%",
                    height: "140px",
                    border: "1px solid #E0E0E0",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    gap: "8px",
                    overflow: "hidden",
                    "&:hover": { borderColor: "black" }
                }}
            >
                <input
                    type="file"
                    hidden
                    accept="image/jpeg,image/png,image/webp"
                    onChange={handleChange}
                />
                {preview ? (
                    <Box
                        component="img"
                        src={preview}
                        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                ) : (
                    <>
                        <FileUploadIcon />
                        <Typography variant="body2" color="#666666">
                            Drag and drop or{" "}
                            <span style={{ color: "#4F46E5", textDecoration: "underline" }}>
                                Upload file
                            </span>
                        </Typography>
                        <Typography variant="caption" color="#9E9E9E">
                            JPG, PNG or WebP
                        </Typography>
                    </>
                )}
            </Box>
        </Stack>
    );
};