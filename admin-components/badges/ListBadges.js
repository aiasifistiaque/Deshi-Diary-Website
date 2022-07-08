import React, { useEffect, useState } from 'react';
import Blank from '../../components/util/blank/Blank';
import {
	useAssignBadgeAsAdminMutation,
	useGetAllBadgesAsAdminQuery,
	useGetAssignedBadgesAsAdminQuery,
} from '../../store/services/adminService';
import ListPage from '../listpage/ListPage';
import { DetailsTable } from '../table/Details';
import styles from './ListBadges.module.css';
import * as lib from '../../lib/constants';
import Button from '../../components/util/button/Button';
import { Header, Image, Modal } from 'semantic-ui-react';
import Success from '../../components/util/error/Success';
import { useRouter } from 'next/router';
import Error from '../../components/util/error/Error';

const ListBadges = ({ id }) => {
	const [open, setOpen] = useState();
	const { data, error, isError, isFetching } =
		useGetAssignedBadgesAsAdminQuery(id);

	const [assign, result] = useAssignBadgeAsAdminMutation();
	const [selected, setSelected] = useState();

	useEffect(() => {
		if (!open) setSelected();
	}, [open]);

	const onAssign = () => {
		if (!selected) return;
		assign({ badge: selected, user: id });
		setOpen(false);
	};

	const Badges = () => {
		if (data) {
			if (data.totalDocs == 0) {
				return <Blank>No Badges Assigned Yet</Blank>;
			} else {
				return (
					<div className={styles.badges}>
						{data?.doc &&
							data.doc.map((item, i) => (
								<Badge item={item?.badge && item.badge} key={i} />
							))}
					</div>
				);
			}
		}
	};

	return (
		<ListPage isError={isError} error={error} title='Badges'>
			<DetailsTable isLoading={isFetching}>
				<AsignBadge
					onAssign={onAssign}
					doc={data?.doc ? data.doc : []}
					open={open}
					setOpen={e => setOpen(e)}
					selected={selected}
					setSelected={e => setSelected(e)}
					loading={result.isLoading}
				/>
				<div>
					{result.isSuccess && <Success>New Badge Assigned</Success>}
					{result.isError && <Error err>Error assigning badge,try again</Error>}
				</div>

				<Badges />
			</DetailsTable>
		</ListPage>
	);
};

const Badge = ({ item }) => {
	return (
		<div className={styles.badge}>
			<div className={styles.image}>
				<img src={item?.image ? item.image : lib.placeholders.badge} alt='$' />
			</div>
			<div className={styles.text}>
				<p>{item?.name ? item.name : 'badge'}</p>
			</div>
		</div>
	);
};

function AsignBadge({
	open,
	setOpen,
	doc,
	selected,
	setSelected,
	onAssign,
	loading,
}) {
	const { data, isError, error, isFetching, isLoading } =
		useGetAllBadgesAsAdminQuery({ perpage: 999 });
	const router = useRouter();
	const { id } = router.query;

	const selectable = sel => {
		let assigned = false;

		doc &&
			doc.map(item => {
				console.log(item.badge._id, sel._id);
				if (item.badge._id == sel._id) {
					assigned = true;
				}
			});

		if (!assigned) {
			return true;
		}
	};

	const select = sel => {
		let assigned = false;

		doc &&
			doc.map(item => {
				console.log(item.badge._id, sel._id);
				if (item.badge._id == sel._id) {
					assigned = true;
				}
			});

		if (!assigned) {
			setSelected(sel._id);
		}
	};

	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={<Button small>{loading ? 'loading' : 'Assign Badge'}</Button>}>
			<Modal.Header>Assign a Badge</Modal.Header>

			<Modal.Content image>
				{!isFetching && !isError && data && data.doc && (
					<div className={styles.assignBadges}>
						{data?.doc &&
							data.doc.map((item, i) => (
								<div
									className={styles.badge}
									key={i}
									style={{
										...(selected === item._id && {
											backgroundColor: '#f1f1f1',
										}),
										...(!selectable(item) && {
											cursor: 'not-allowed',
										}),
									}}
									onClick={() => {
										select(item);
									}}>
									<div className={styles.image}>
										<img
											src={item?.image ? item.image : lib.placeholders.badge}
											alt='$'
										/>
									</div>
									<div className={styles.text}>
										<p>{item?.name ? item.name : 'badge'}</p>
									</div>
								</div>
							))}
					</div>
				)}
			</Modal.Content>

			<Modal.Actions>
				<Button
					primary
					small
					onClick={() => setOpen(false)}
					style={{ marginRight: 4 }}
					onClick={onAssign}>
					Assign
				</Button>
				<Button secondary small onClick={() => setOpen(false)}>
					cancel
				</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default ListBadges;
