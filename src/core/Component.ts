import * as React from 'react';
import { IPropBase } from './Props';
export class ComponentBase<P extends IPropBase<any>> extends React.Component<P, never>{
  public shouldComponentUpdate(nextProps: Readonly<P>) {
    return this.props.state !== nextProps.state;
  }
}