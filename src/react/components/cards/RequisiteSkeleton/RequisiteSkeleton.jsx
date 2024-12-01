import { Skeleton } from "@mui/material";
import "./RequisiteSkeleton.css"

export function RequisiteSkeleton() {
    return <div className="requisite_skeleton__container">
        <Skeleton
            animation='wave'
            className="requisite_skeleton"
        />
    </div>;
}