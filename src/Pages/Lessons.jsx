import { Collapse, Table, Checkbox, Typography } from 'antd';
import { useContext, useState, useEffect } from 'react';
import { LessonsAPI } from '../apis/LessonsAPI';

const { Panel } = Collapse;

function BasicTable({ data, idx, setLessonsData }) {
	const handleStatusChange = (e, row) => {
		const updatedStatus = e.target.checked ? 'Done' : 'Pending';
		const updatedLessonsData = prevLessonsData => prevLessonsData.map((lesson, lessonIdx) => {
			if (lessonIdx !== idx) return lesson;
			return {
				...lesson,
				tableData: lesson.tableData.map(item =>
					item.id_lesson === row.id_lesson
						? { ...item, status: updatedStatus }
						: item
				),
			};
		});
		setLessonsData(updatedLessonsData);

		(async () => { await LessonsAPI.put(row.id_lesson, updatedStatus) })();
	};

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: `name${idx}`,
			render: (text, row) => (
				<>
					<Checkbox
						checked={row.status === 'Done'}
						onChange={(e) => handleStatusChange(e, row)}
					/>
					<span style={{ marginLeft: 8 }}>{text}</span>
				</>
			),
		},
		{
			title: 'Leetcode link',
			dataIndex: 'leetcode',
			key: `leetcode${idx}`,
			align: 'right',
			render: (url) => <a href={url} target="_blank" rel="noopener noreferrer">practice</a>,
		},
		{
			title: 'YouTube link',
			dataIndex: 'youtube',
			key: `youtube${idx}`,
			align: 'right',
			render: (url) => <a href={url} target="_blank" rel="noopener noreferrer">watch</a>,
		},
		{
			title: 'Article link',
			dataIndex: 'article',
			key: `article${idx}`,
			align: 'right',
			render: (url) => <a href={url} target="_blank" rel="noopener noreferrer">read</a>,
		},
		{
			title: 'Level',
			dataIndex: 'level',
			key: `levels${idx}`,
			align: 'right',
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: `status${idx}`,
			align: 'right',
		},
	];

	return (
		<Table
			dataSource={[...data]}
			columns={columns}
			rowKey="id_lesson"
			pagination={false}
		/>
	);
}

export default function LessonsCollapse() {
	const [LessonsData, setLessonsData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await LessonsAPI.get();
			setLessonsData(result);
		};
		fetchData();
	}, []);

	return (
		<section
			className="section"
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
			}}
		>
			<Collapse
				accordion
				// onChange={handleCollapseChange}
				bordered
				style={{ width: '80%' }}
			>
				{LessonsData.map((lesson, idx) => (
					<Panel
						header={<Typography.Text strong>{lesson.title}</Typography.Text>}
						key={`panel${idx + 1}`}
					>
						<BasicTable data={lesson.tableData} idx={idx} setLessonsData={setLessonsData} />
					</Panel>
				))}
			</Collapse>
		</section>
	);
}


