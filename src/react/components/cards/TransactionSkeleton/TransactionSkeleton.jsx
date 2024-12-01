import { Skeleton } from "@mui/material";
import "./TransactionSkeleton.css"

export function TransactionSkeleton() {
    return <div className="transaction_skeleton__container">
        <Skeleton
            animation='wave'
            className="transaction_skeleton"
        />
    </div>;
}