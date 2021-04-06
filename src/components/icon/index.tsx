// @ts-nocheck
import React, { useContext } from 'react'
import { ThemeContext } from './../../contexts/index'

export default (props: { name: 'Home' | 'HomeSelected' | 'Msg' | 'MsgSelected' | 'User' | 'UserSelected' }) => {
	const { value: { hex } } = useContext(ThemeContext)
	const defaultColor = '#666'
	const size = 26
	const iconList = {
		Home: () => <svg t="1617749417885" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4271" width={size} height={size}><path d="M919.2 419.2L531.2 141.6c-11.2-8-26.4-8-36.8 0L104 419.2c-12.8 8.8-6.4 28.8 9.6 28.8H192v432c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V640h192v240c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V448h78.4c15.2 0 21.6-20 8.8-28.8z" p-id="4272" fill={defaultColor}></path></svg>,
		HomeSelected: () => <svg t="1617749417885" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4271" width={size} height={size}><path d="M919.2 419.2L531.2 141.6c-11.2-8-26.4-8-36.8 0L104 419.2c-12.8 8.8-6.4 28.8 9.6 28.8H192v432c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V640h192v240c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V448h78.4c15.2 0 21.6-20 8.8-28.8z" p-id="4272" fill={hex}></path></svg>,
		Msg: () => <svg t="1617749285791" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3969" width={size} height={size}><path d="M510.4 63.2c-212 0-384 172-384 384 0 184.8 131.2 340 305.6 376l80 138.4 80-138.4C764.8 785.6 894.4 632 894.4 448c0-212.8-172-384.8-384-384.8zM319.2 512c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64zM512 512c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z m191.2 0c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z" p-id="3970" fill={defaultColor}></path></svg>,
		MsgSelected: () => <svg t="1617749285791" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3969" width={size} height={size}><path d="M510.4 63.2c-212 0-384 172-384 384 0 184.8 131.2 340 305.6 376l80 138.4 80-138.4C764.8 785.6 894.4 632 894.4 448c0-212.8-172-384.8-384-384.8zM319.2 512c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64zM512 512c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z m191.2 0c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z" p-id="3970" fill={hex}></path></svg>,
		User: () => <svg t="1617749352954" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4138" width={size} height={size}><path d="M500 128.8c-95.2 5.6-173.6 83.2-180 178.4-7.2 112 80.8 205.6 191.2 205.6 106.4 0 192-86.4 192-192 0.8-110.4-92-198.4-203.2-192zM512 575.2c-128 0-383.2 64-383.2 192v96c0 17.6 14.4 32 32 32h702.4c17.6 0 32-14.4 32-32V766.4c0-127.2-255.2-191.2-383.2-191.2z" p-id="4139" fill={defaultColor}></path></svg>,
		UserSelected: () => <svg t="1617749352954" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4138" width={size} height={size}><path d="M500 128.8c-95.2 5.6-173.6 83.2-180 178.4-7.2 112 80.8 205.6 191.2 205.6 106.4 0 192-86.4 192-192 0.8-110.4-92-198.4-203.2-192zM512 575.2c-128 0-383.2 64-383.2 192v96c0 17.6 14.4 32 32 32h702.4c17.6 0 32-14.4 32-32V766.4c0-127.2-255.2-191.2-383.2-191.2z" p-id="4139" fill={hex}></path></svg>,
	}
	return (
		iconList[props.name]()
	)
}
