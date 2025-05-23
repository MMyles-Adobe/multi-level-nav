import React, { useState } from 'react';
import { View, Heading, TableView, TableHeader, TableBody, Column, Row, Cell, Button, Flex, Link, StatusLight, Avatar, useCollator, useAsyncList } from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';

const uniqueOwners = [
  'Sarah Johnson',
  'Michael Chen',
  'Emily Rodriguez',
  'David Kim',
  'Lisa Patel',
  'James Wilson',
  'Maria Garcia',
  'Robert Taylor',
  'Jennifer Lee',
  'Thomas Brown'
];

function getAvatarUrl(name) {
  const hash = name.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${hash}`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function formatBudget(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

function CampaignsPage() {
  const collator = useCollator({ numeric: true });
  const [selectedKeys, setSelectedKeys] = useState(new Set());
  const navigate = useNavigate();
  const [campaigns] = useState([
    { id: 1, name: 'Q1 Product Launch', status: 'Active', owner: uniqueOwners[0], startDate: '2024-01-15', endDate: '2024-03-31', budget: 250000, program: 'Product Innovation' },
    { id: 2, name: 'Summer Digital Marketing', status: 'Planning', owner: uniqueOwners[1], startDate: '2024-06-01', endDate: '2024-08-31', budget: 180000, program: 'Market Expansion' },
    { id: 3, name: 'Customer Loyalty Program', status: 'In Progress', owner: uniqueOwners[2], startDate: '2024-03-01', endDate: '2024-05-31', budget: 150000, program: 'Customer Experience' },
    { id: 4, name: 'Brand Awareness Initiative', status: 'Active', owner: uniqueOwners[3], startDate: '2024-02-01', endDate: '2024-04-30', budget: 300000, program: 'Global Market Expansion' },
    { id: 5, name: 'Social Media Engagement', status: 'Completed', owner: uniqueOwners[4], startDate: '2024-01-01', endDate: '2024-02-29', budget: 75000, program: 'Digital Marketing' },
    { id: 6, name: 'Email Marketing Series', status: 'Planning', owner: uniqueOwners[5], startDate: '2024-04-01', endDate: '2024-06-30', budget: 50000, program: 'Customer Experience' },
    { id: 7, name: 'Trade Show Exhibition', status: 'On Hold', owner: uniqueOwners[6], startDate: '2024-05-15', endDate: '2024-07-15', budget: 200000, program: 'Market Expansion' },
    { id: 8, name: 'Content Marketing Push', status: 'Active', owner: uniqueOwners[7], startDate: '2024-03-15', endDate: '2024-05-15', budget: 120000, program: 'Digital Marketing' },
    { id: 9, name: 'Holiday Season Special', status: 'Planning', owner: uniqueOwners[8], startDate: '2024-11-01', endDate: '2024-12-31', budget: 400000, program: 'Sales Growth' },
    { id: 10, name: 'B2B Partnership Launch', status: 'In Progress', owner: uniqueOwners[9], startDate: '2024-04-15', endDate: '2024-06-15', budget: 250000, program: 'Business Development' }
  ]);

  const list = useAsyncList({
    async load() {
      return {
        items: campaigns.sort((a, b) => collator.compare(a.name, b.name))
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          const first = a[sortDescriptor.column];
          const second = b[sortDescriptor.column];
          
          if (first == null && second == null) return 0;
          if (first == null) return sortDescriptor.direction === 'ascending' ? -1 : 1;
          if (second == null) return sortDescriptor.direction === 'ascending' ? 1 : -1;
          
          if (sortDescriptor.column === 'startDate' || sortDescriptor.column === 'endDate') {
            const dateA = new Date(first);
            const dateB = new Date(second);
            return sortDescriptor.direction === 'ascending' 
              ? dateA - dateB
              : dateB - dateA;
          }
          
          if (sortDescriptor.column === 'budget') {
            return sortDescriptor.direction === 'ascending'
              ? first - second
              : second - first;
          }
          
          const comparison = collator.compare(first, second);
          return sortDescriptor.direction === 'ascending' ? comparison : -comparison;
        })
      };
    },
    initialSortDescriptor: {
      column: 'name',
      direction: 'ascending'
    }
  });

  return (
    <View>
      <Flex direction="row" justifyContent="space-between" alignItems="center" marginBottom="size-200" height="size-400">
        <Heading level={1}>Campaigns</Heading>
        <Button 
          variant="accent" 
          size="M"
          onPress={() => {}}
        >
          Create campaign
        </Button>
      </Flex>
      <TableView
        aria-label="Campaigns table"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        height={700}
        overflowMode="nowrap"
        sortDescriptor={list.sortDescriptor}
        onSortChange={list.sort}
      >
        <TableHeader>
          <Column key="name" allowsSorting>Name</Column>
          <Column key="status" allowsSorting>Status</Column>
          <Column key="owner" allowsSorting>Owner</Column>
          <Column key="program" allowsSorting>Program</Column>
          <Column key="startDate" allowsSorting>Start Date</Column>
          <Column key="endDate" allowsSorting>End Date</Column>
          <Column key="budget" allowsSorting>Budget</Column>
        </TableHeader>
        <TableBody items={list.items}>
          {(item) => (
            <Row>
              <Cell>
                <Link
                  onPress={() => {
                    const campaignSlug = item.name
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '');
                    navigate(`/campaign/${campaignSlug}/details`);
                  }}
                >
                  {item.name}
                </Link>
              </Cell>
              <Cell>
                <StatusLight 
                  variant={
                    item.status === 'Completed' ? 'positive' :
                    item.status === 'Planning' ? 'notice' :
                    item.status === 'On Hold' ? 'negative' :
                    'info'
                  }
                >
                  {item.status}
                </StatusLight>
              </Cell>
              <Cell>
                <Flex gap="size-100" alignItems="center">
                  <Avatar 
                    src={getAvatarUrl(item.owner)}
                    alt={`${item.owner}'s avatar`}
                    size="avatar-size-100"
                  />
                  <span>{item.owner}</span>
                </Flex>
              </Cell>
              <Cell>{item.program}</Cell>
              <Cell>{formatDate(item.startDate)}</Cell>
              <Cell>{formatDate(item.endDate)}</Cell>
              <Cell>{formatBudget(item.budget)}</Cell>
            </Row>
          )}
        </TableBody>
      </TableView>
    </View>
  );
}

export default CampaignsPage; 