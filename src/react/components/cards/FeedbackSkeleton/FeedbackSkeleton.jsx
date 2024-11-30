import { Skeleton } from "@mui/material";
import "./FeedbackSkeleton.css"

export function FeedbackSkeleton() {
    return <div className="feedback_skeleton__container">
        <Skeleton
            animation='wave'
            className="feedback_skeleton"
        />
    </div>;
}