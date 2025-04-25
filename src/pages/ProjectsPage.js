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
  // Create a consistent hash from the name
  const hash = name.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  
  // Use the hash to generate a consistent seed for the avatar
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

function ProjectsPage() {
  const collator = useCollator({ numeric: true });
  const [selectedKeys, setSelectedKeys] = useState(new Set());
  const navigate = useNavigate();
  const [projects] = useState([
    { id: 1, name: 'Website Redesign', status: 'In Progress', owner: uniqueOwners[0], startDate: '2024-04-01', endDate: '2024-06-30', portfolio: 'Digital Transformation' },
    { id: 2, name: 'Mobile App Development', status: 'Planning', owner: uniqueOwners[1], startDate: '2024-05-15', endDate: '2024-08-15', portfolio: 'Product Innovation' },
    { id: 3, name: 'Marketing Campaign', status: 'Completed', owner: uniqueOwners[2], startDate: '2024-03-01', endDate: '2024-03-31', portfolio: 'Market Expansion' },
    { id: 4, name: 'Product Launch', status: 'In Progress', owner: uniqueOwners[3], startDate: '2024-04-15', endDate: '2024-07-15', portfolio: 'Product Innovation' },
    { id: 5, name: 'Content Strategy', status: 'Planning', owner: uniqueOwners[4], startDate: '2024-05-01', endDate: '2024-07-31', portfolio: 'Digital Transformation' },
    { id: 6, name: 'E-commerce Platform', status: 'In Progress', owner: uniqueOwners[5], startDate: '2024-04-10', endDate: '2024-07-10', portfolio: 'Customer Experience' },
    { id: 7, name: 'Social Media Integration', status: 'Planning', owner: uniqueOwners[6], startDate: '2024-05-20', endDate: '2024-08-20', portfolio: 'Digital Transformation' },
    { id: 8, name: 'Data Analytics Dashboard', status: 'In Progress', owner: uniqueOwners[7], startDate: '2024-04-05', endDate: '2024-07-05', portfolio: 'Business Analytics' },
    { id: 9, name: 'Customer Support Portal', status: 'Completed', owner: uniqueOwners[8], startDate: '2024-02-15', endDate: '2024-03-15', portfolio: 'Customer Experience' },
    { id: 10, name: 'Inventory Management System', status: 'In Progress', owner: uniqueOwners[9], startDate: '2024-04-20', endDate: '2024-07-20', portfolio: 'Operational Excellence' },
    { id: 11, name: 'HR Management Platform', status: 'Planning', owner: uniqueOwners[0], startDate: '2024-06-01', endDate: '2024-09-01', portfolio: 'Infrastructure Modernization' },
    { id: 12, name: 'Financial Reporting Tool', status: 'In Progress', owner: uniqueOwners[1], startDate: '2024-04-25', endDate: '2024-07-25', portfolio: 'Business Analytics' },
    { id: 13, name: 'Project Management Dashboard', status: 'Completed', owner: uniqueOwners[2], startDate: '2024-02-20', endDate: '2024-03-20', portfolio: 'Operational Excellence' },
    { id: 14, name: 'Document Management System', status: 'In Progress', owner: uniqueOwners[3], startDate: '2024-04-30', endDate: '2024-07-30', portfolio: 'Infrastructure Modernization' },
    { id: 15, name: 'Customer Relationship Management', status: 'Planning', owner: uniqueOwners[4], startDate: '2024-06-05', endDate: '2024-09-05', portfolio: 'Customer Experience' },
    { id: 16, name: 'Analytics Dashboard Redesign', status: 'In Progress', owner: uniqueOwners[1], startDate: '2024-06-10', endDate: '2024-09-10', portfolio: 'Business Analytics' },
    { id: 17, name: 'Quality Assurance Framework', status: 'Completed', owner: uniqueOwners[6], startDate: '2024-03-10', endDate: '2024-04-10', portfolio: 'Technology Innovation' },
    { id: 18, name: 'Security Enhancement Project', status: 'In Progress', owner: uniqueOwners[7], startDate: '2024-05-10', endDate: '2024-08-10', portfolio: 'Technology Innovation' },
    { id: 19, name: 'Performance Optimization', status: 'Planning', owner: uniqueOwners[8], startDate: '2024-06-10', endDate: '2024-09-10', portfolio: 'Infrastructure Modernization' },
    { id: 20, name: 'User Experience Redesign', status: 'In Progress', owner: uniqueOwners[9], startDate: '2024-05-15', endDate: '2024-08-15', portfolio: 'Customer Experience' }
  ]);

  const list = useAsyncList({
    async load() {
      return {
        items: projects.sort((a, b) => collator.compare(a.name, b.name))
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          const first = a[sortDescriptor.column];
          const second = b[sortDescriptor.column];
          
          // Handle undefined or null values
          if (first == null && second == null) return 0;
          if (first == null) return sortDescriptor.direction === 'ascending' ? -1 : 1;
          if (second == null) return sortDescriptor.direction === 'ascending' ? 1 : -1;
          
          // Handle date comparisons
          if (sortDescriptor.column === 'startDate' || sortDescriptor.column === 'endDate') {
            const dateA = new Date(first);
            const dateB = new Date(second);
            return sortDescriptor.direction === 'ascending' 
              ? dateA - dateB
              : dateB - dateA;
          }
          
          // Use collator for string comparisons
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
        <Heading level={1}>Projects</Heading>
        <Button 
          variant="accent" 
          size="M"
          onPress={() => {}}
        >
          Create project
        </Button>
      </Flex>
      <TableView
        aria-label="Projects table"
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
          <Column key="portfolio" allowsSorting>Portfolio</Column>
          <Column key="startDate" allowsSorting>Start Date</Column>
          <Column key="endDate" allowsSorting>End Date</Column>
        </TableHeader>
        <TableBody items={list.items}>
          {(item) => (
            <Row>
              <Cell>
                <Link
                  onPress={() => {
                    const projectSlug = item.name
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '');
                    navigate(`/project/${projectSlug}/details`);
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
              <Cell>
                <Link
                  onPress={() => {
                    const portfolioSlug = item.portfolio
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '');
                    navigate(`/portfolio/${portfolioSlug}/details`);
                  }}
                >
                  {item.portfolio}
                </Link>
              </Cell>
              <Cell>{formatDate(item.startDate)}</Cell>
              <Cell>{formatDate(item.endDate)}</Cell>
            </Row>
          )}
        </TableBody>
      </TableView>
    </View>
  );
}

export default ProjectsPage; 