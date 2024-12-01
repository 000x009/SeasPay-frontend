import { RequisiteSkeleton } from "@/react/components/cards/RequisiteSkeleton/RequisiteSkeleton"

export function RequisiteListSkeleton({ remaining }) {
    return Array.from({ length: remaining }, (_, index) => (
        <RequisiteSkeleton key={index} />
    ))
}