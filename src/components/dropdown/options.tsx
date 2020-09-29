const Options = {
  sort: [
    {
      key: '1',
      label: 'SLA (Urgent First)',
      value: 'SLA (Urgent First)',
    },
    {
      key: '2',
      label: 'SLA (Urgent Last)',
      value: 'SLA (Urgent Last)',
    },
    {
      key: '3',
      label: 'Latest',
      value: 'Latest',
    },
    {
      key: '3',
      label: 'Oldest',
      value: 'Oldest',
    },
    {
      key: '4',
      label: 'Highest Critical Code',
      value: 'Highest Critical Code',
    },
    {
      key: '5',
      label: 'Lowest Critical Code',
      value: 'Lowest Critical Code',
    },
  ],
  dateFilter: [
    {
      key: '1',
      label: 'Current week',
      value: 'thisWeek',
    },
    {
      key: '2',
      label: 'Current month',
      value: 'thisMonth',
    },
    {
      key: '3',
      label: 'Last 3 months',
      value: 'last3Months',
    },
    {
      key: '4',
      label: 'Last 6 months',
      value: 'last6Months',
    },
    {
      key: '5',
      label: 'Last 12 months',
      value: 'last12Months',
    }
  ],
  plannedSort: [
    {
      key: '1',
      label: 'Status (Completed First)',
      value: 'Status (Completed First)',
    },
    {
      key: '2',
      label: 'Status (Open First)',
      value: 'Status (Open First)',
    },
    {
      key: '3',
      label: 'Status (Incomplete First)',
      value: 'Status (Incomplete First)',
    },
    {
      key: '4',
      label: 'Earliest',
      value: 'Earliest',
    },
    {
      key: '5',
      label: 'Latest',
      value: 'Latest',
    }
  ],
  assetSort: [
    {
      key: '1',
      label: 'Condition (Highest First)',
      value: 'Condition (Highest First)',
    },
    {
      key: '2',
      label: 'Condition (Poorest First)',
      value: 'Condition (Poorest First)',
    },
    {
      key: '3',
      label: 'Name (A-Z)',
      value: 'Name (A-Z)',
    },
    {
      key: '4',
      label: 'Name (Z-A)',
      value: 'Name (Z-A)',
    }
  ]
};

export default Options;
