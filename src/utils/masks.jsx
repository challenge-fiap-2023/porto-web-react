import React from "react";

export function formatCPF(inputCPF) {
    const cleanedCPF = inputCPF.replace(/\D/g, ''); // Remove non-digit characters

    if (cleanedCPF.length <= 3) {
        return cleanedCPF;
    } else if (cleanedCPF.length <= 6) {
        return `${cleanedCPF.slice(0, 3)}.${cleanedCPF.slice(3)}`;
    } else if (cleanedCPF.length <= 9) {
        return `${cleanedCPF.slice(0, 3)}.${cleanedCPF.slice(3, 6)}.${cleanedCPF.slice(6)}`;
    } else {
        return `${cleanedCPF.slice(0, 3)}.${cleanedCPF.slice(3, 6)}.${cleanedCPF.slice(6, 9)}-${cleanedCPF.slice(9)}`;
    }
}

export function formatCNPJ(inputCNPJ) {
    const cleanedCNPJ = inputCNPJ.replace(/\D/g, ''); // Remove non-digit characters

    if (cleanedCNPJ.length <= 2) {
        return cleanedCNPJ;
    } else if (cleanedCNPJ.length <= 5) {
        return `${cleanedCNPJ.slice(0, 2)}.${cleanedCNPJ.slice(2)}`;
    } else if (cleanedCNPJ.length <= 8) {
        return `${cleanedCNPJ.slice(0, 2)}.${cleanedCNPJ.slice(2, 5)}.${cleanedCNPJ.slice(5)}`;
    } else if (cleanedCNPJ.length <= 12) {
        return `${cleanedCNPJ.slice(0, 2)}.${cleanedCNPJ.slice(2, 5)}.${cleanedCNPJ.slice(5, 8)}/${cleanedCNPJ.slice(8)}`;
    } else if (cleanedCNPJ.length <= 14) {
        return `${cleanedCNPJ.slice(0, 2)}.${cleanedCNPJ.slice(2, 5)}.${cleanedCNPJ.slice(5, 8)}/${cleanedCNPJ.slice(8, 12)}-${cleanedCNPJ.slice(12)}`;
    } else {
        return `${cleanedCNPJ.slice(0, 2)}.${cleanedCNPJ.slice(2, 5)}.${cleanedCNPJ.slice(5, 8)}/${cleanedCNPJ.slice(8, 12)}-${cleanedCNPJ.slice(12, 14)}`;
    }
}

export function searchChildrenToArrayByClassName(children, className) {
    return React.Children.toArray(children).find(
        (child) => child.props.className == className
    );
}