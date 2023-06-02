import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Button from './Button';

const Tab = () => (
  <div>
    <Tabs.Root
      className="flex w-[300px] flex-col shadow-[0_2px_10px] shadow-blackA4"
      defaultValue="tab1"
    >
      <Tabs.List
        className="flex shrink-0 border-b border-mauve6"
        aria-label="Manage your account"
      >
        <Tabs.Trigger
          className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
          value="tab1"
        >
          Account
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="tab1"
      >
        <p className="mb-5 text-[15px] leading-normal text-mauve11">
          Login to your account to manage your profile, orders, and more.
        </p>
        <fieldset className="mb-[15px] flex w-full flex-col justify-start">
          <label
            className="mb-2.5 block text-[13px] leading-none text-violet12"
            htmlFor="Login"
          >
            Login
          </label>
          <input
            className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
            id="login"
          />
        </fieldset>
        <fieldset className="mb-[15px] flex w-full flex-col justify-start">
          <label
            className="mb-2.5 block text-[13px] leading-none text-violet12"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
            id="password"
          />
        </fieldset>
        <div className="mt-5 flex justify-end"></div>
      </Tabs.Content>
    </Tabs.Root>

    <Button />
  </div>
);

export default Tab;
