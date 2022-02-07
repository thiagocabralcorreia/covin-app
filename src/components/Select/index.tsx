import React from 'react';
import SelectDropdown, { SelectDropdownProps } from 'react-native-select-dropdown'

import styles from './styles';

export const Select = ({ data, onSelect, buttonTextAfterSelection, rowTextForSelection }: SelectDropdownProps) => {
    return (
        <SelectDropdown
			data={data}
			onSelect={onSelect}
			buttonTextAfterSelection={buttonTextAfterSelection}
			rowTextForSelection={rowTextForSelection}
			defaultButtonText='Select a Country'
			buttonStyle={styles.selectButton}
			buttonTextStyle={styles.selectText}
			dropdownStyle={styles.dropdown}
			rowTextStyle={styles.rowText}
		/>
    )
};


