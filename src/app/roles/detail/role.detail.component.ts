/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {RolesStore} from '../store/index';
import * as fromRoles from '../store';
import {Role} from '../../services/identity/domain/role.model';
import {DELETE, SelectAction} from '../store/role.actions';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {IdentityService} from '../../services/identity/identity.service';
import {PermittableGroup} from '../../services/anubis/permittable-group.model';
import {Observable} from 'rxjs';
import {FormPermissionService} from '../helper/form-permission.service';
import {TdDialogService} from '@covalent/core';
import {FormPermissionGroup} from '../model/form-permission-group.model';

@Component({
  templateUrl: './role.detail.component.html'
})
export class RoleDetailComponent implements OnInit, OnDestroy {

  private actionsSubscription: Subscription;

  role$: Observable<Role>;

  permissionGroup$: Observable<FormPermissionGroup[]>;

  constructor(private route: ActivatedRoute, private identityService: IdentityService, private store: RolesStore,
              private formPermissionService: FormPermissionService, private dialogService: TdDialogService) {}

  ngOnInit(): void {
    this.actionsSubscription = this.route.params
      .map(params => new SelectAction(params['id']))
      .subscribe(this.store);

    this.role$ = this.store.select(fromRoles.getSelectedRole)
      .filter(role => !!role);

    this.permissionGroup$ = Observable.combineLatest(
      this.identityService.getPermittableGroups(),
      this.role$,
      (groups: PermittableGroup[], role: Role) => this.formPermissionService.mapToFormPermissions(groups, role.permissions)
    );
  }

  confirmDeletion(): Observable<boolean> {
    return this.dialogService.openConfirm({
      message: 'Do you want to delete this role?',
      title: 'Confirm deletion',
      acceptButton: 'DELETE ROLE',
    }).afterClosed();
  }

  deleteRole(role: Role): void {
    this.confirmDeletion()
      .filter(accept => accept)
      .subscribe(() => {
        this.store.dispatch({ type: DELETE, payload: {
          role,
          activatedRoute: this.route
        } });
      });
  }

  ngOnDestroy(): void {
    this.actionsSubscription.unsubscribe();
  }
}
